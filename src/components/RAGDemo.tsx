import { useState, useRef } from 'react';
import { Upload, FileText, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const RAGDemo = () => {
    const isEnglish = window.location.pathname.startsWith('/en');

    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError(isEnglish ? 'File must be less than 5 MB' : 'Le fichier doit faire moins de 5 MB');
                return;
            }
            setFile(selectedFile);
            setError('');
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setError('');

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('session_id', sessionId);

            const response = await fetch('https://unrefractive-subreputably-berenice.ngrok-free.dev/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Upload failed');

            setUploaded(true);
        } catch (err) {
            setError(isEnglish
                ? 'Upload error. Make sure the backend is running.'
                : 'Erreur lors de l\'upload. Assurez-vous que le backend est lancé.');
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const handleAsk = async () => {
        if (!question.trim()) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://unrefractive-subreputably-berenice.ngrok-free.dev/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: question,
                    session_id: sessionId,
                }),
            });

            if (!response.ok) throw new Error('Query failed');

            const data = await response.json();
            setAnswer(data.answer);
        } catch (err) {
            setError(isEnglish
                ? 'Query error. Check your backend.'
                : 'Erreur lors de la requête. Vérifiez votre backend.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            {isEnglish ? 'Interactive RAG Demo' : 'Démo RAG Interactive'}
                        </h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {isEnglish
                            ? 'Test the power of a RAG system in real-time: upload a document and ask it questions'
                            : 'Testez la puissance d\'un système RAG en temps réel : uploadez un document et posez-lui des questions'}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {error && (
                        <Alert className="mb-6 border-destructive/50 bg-destructive/10">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <div className="bg-card rounded-2xl shadow-xl border-2 border-border overflow-hidden">
                        {!uploaded ? (
                            <div className="p-8">
                                <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-12 text-center hover:border-primary/50 transition-colors">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.txt,.md"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                    {!file ? (
                                        <div onClick={() => fileInputRef.current?.click()} className="cursor-pointer">
                                            <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                                            <p className="text-lg font-semibold mb-2">
                                                {isEnglish ? 'Click to choose a file' : 'Cliquez pour choisir un fichier'}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                .pdf {isEnglish ? '(max 5 MB)' : '(max 5 MB)'}
                                            </p>
                                        </div>
                                    ) : (
                                        <div>
                                            <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
                                            <p className="text-lg font-semibold mb-2">
                                                {file.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {(file.size / 1024).toFixed(2)} KB
                                            </p>
                                            <div className="flex gap-3 justify-center">
                                                <Button
                                                    onClick={handleUpload}
                                                    disabled={uploading}
                                                >
                                                    {uploading ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            {isEnglish ? 'Uploading...' : 'Upload en cours...'}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Upload className="mr-2 h-4 w-4" />
                                                            {isEnglish ? 'Load document' : 'Charger le document'}
                                                        </>
                                                    )}
                                                </Button>
                                                <Button
                                                    onClick={() => setFile(null)}
                                                    variant="outline"
                                                >
                                                    {isEnglish ? 'Cancel' : 'Annuler'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="divide-y divide-border">
                                <div className="p-6 bg-primary/5">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-primary" />
                                        <span className="font-semibold">
                                            {file?.name}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            ✓ {isEnglish ? 'Loaded' : 'Chargé'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <label className="block text-sm font-semibold mb-3">
                                        {isEnglish ? 'Ask your question' : 'Posez votre question'}
                                    </label>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={question}
                                            onChange={(e) => setQuestion(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                                            placeholder={isEnglish
                                                ? 'E.g.: What are the main points of this document?'
                                                : 'Ex: Quels sont les points principaux de ce document ?'}
                                            className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
                                            disabled={loading}
                                        />
                                        <Button
                                            onClick={handleAsk}
                                            disabled={loading || !question.trim()}
                                        >
                                            {loading ? (
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            ) : (
                                                <Send className="h-5 w-5" />
                                            )}
                                        </Button>
                                    </div>

                                    {answer && (
                                        <div className="mt-6 p-6 bg-muted/50 rounded-xl border border-border">
                                            <div className="flex items-start gap-3">
                                                <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold mb-2">
                                                        {isEnglish ? 'Answer' : 'Réponse'}
                                                    </p>
                                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                                        {answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 bg-muted/30 text-center">
                                    <Button
                                        onClick={() => {
                                            setUploaded(false);
                                            setFile(null);
                                            setQuestion('');
                                            setAnswer('');
                                        }}
                                        variant="outline"
                                        size="sm"
                                    >
                                        {isEnglish ? 'Load a new document' : 'Charger un nouveau document'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <p>
                            💡 {isEnglish
                            ? 'This demo uses a RAG system to answer your questions based on your document content'
                            : 'Cette démo utilise un système RAG pour répondre à vos questions sur la base du contenu de votre document'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
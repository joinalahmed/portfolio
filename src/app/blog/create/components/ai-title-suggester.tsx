'use client';

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateTitles } from '@/lib/actions';
import { Sparkles, Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AiTitleSuggesterProps {
  onSelectTitle: (title: string) => void;
  currentTopic?: string;
}

export function AiTitleSuggester({ onSelectTitle, currentTopic = '' }: AiTitleSuggesterProps) {
  const [topic, setTopic] = useState(currentTopic);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateSuggestions = () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a blog topic to generate title suggestions.",
        variant: "destructive",
      });
      return;
    }
    startTransition(async () => {
      try {
        const result = await generateTitles(topic);
        if (result.suggestedTitles && result.suggestedTitles.length > 0) {
          setSuggestions(result.suggestedTitles);
          toast({
            title: "Suggestions Generated!",
            description: `${result.suggestedTitles.length} titles suggested for "${topic}".`,
          });
        } else {
          setSuggestions([]);
           toast({
            title: "No Suggestions",
            description: `Could not generate titles for "${topic}". Try a different topic.`,
            variant: "default",
          });
        }
      } catch (error) {
        console.error("Failed to generate titles:", error);
        setSuggestions([]);
        toast({
          title: "Error Generating Titles",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    });
  };
  
  // Update local topic state if currentTopic prop changes from outside
  // (e.g. user types in main title field)
  useState(() => {
    setTopic(currentTopic);
  }, [currentTopic]);


  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Title Suggestions
        </CardTitle>
        <CardDescription>
          Enter a blog topic or use the current post title to get AI-powered title suggestions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="blogTopic" className="block text-sm font-medium text-muted-foreground mb-1">
            Blog Topic
          </label>
          <Textarea
            id="blogTopic"
            placeholder="e.g., 'The impact of quantum computing on AI'"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            rows={2}
          />
        </div>
        <Button onClick={handleGenerateSuggestions} disabled={isPending} className="w-full sm:w-auto">
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Suggestions
            </>
          )}
        </Button>

        {suggestions.length > 0 && (
          <div className="space-y-3 pt-4">
            <h4 className="font-semibold text-foreground">Suggested Titles:</h4>
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-center justify-between gap-2 p-2 rounded-md border bg-background hover:bg-accent/50 transition-colors">
                  <span className="text-sm text-muted-foreground flex-grow">{suggestion}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSelectTitle(suggestion)}
                    className="text-primary hover:text-primary/80"
                  >
                    Use this title
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { useCallback, useState } from 'react';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackType, FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [hasFeedbackSent, setHasFeedbackSent] = useState(false);

  const handleFeedbackTypeChanged = useCallback((type: FeedbackType) => {
    setFeedbackType(type);
  }, []);

  const handleRestartFeedbackType = useCallback(() => {
    setHasFeedbackSent(false);
    setFeedbackType(null);
  }, []);

  const handleFeedbackSent = useCallback(() => {
    setHasFeedbackSent(true);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {hasFeedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedbackType}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep
              onFeedbackTypeChanged={handleFeedbackTypeChanged}
            />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedbackType}
              onFeedbackSent={handleFeedbackSent}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/wilsonfsouza"
          target="__blank"
          rel="noopener noreferrer"
        >
          Wilson
        </a>
      </footer>
    </div>
  );
}

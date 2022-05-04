import { useCallback, useState } from 'react';
import { CloseButton } from '../CloseButton';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackType, FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const handleFeedbackTypeChanged = useCallback((type: FeedbackType) => {
    setFeedbackType(type);
  }, []);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Leave Your Feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={handleFeedbackTypeChanged} />
      ) : (
        <FeedbackContentStep />
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

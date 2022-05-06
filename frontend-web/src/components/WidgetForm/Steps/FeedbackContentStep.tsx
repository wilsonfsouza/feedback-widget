import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useCallback, useState } from 'react';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { FeedbackType, FEEDBACK_TYPES } from './FeedbackTypeStep';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');

  const handleScreenshotCaptured = useCallback(
    (screenshotBase64: string | null) => {
      setScreenshot(screenshotBase64);
    },
    [],
  );

  const feedBackTypeInfo = FEEDBACK_TYPES[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event?.preventDefault();
    console.log({ screenshot, feedbackComment });
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Describe with details what is happening..."
          onChange={event => setFeedbackComment(event.target.value)}
        />
        <footer className="flex mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotCaptured={handleScreenshotCaptured}
          />
          <button
            disabled={feedbackComment.length === 0}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-60 disabled:hover:bg-brand-500 disabled:cursor-not-allowed"
          >
            Submit Feedback
          </button>
        </footer>
      </form>
    </>
  );
}

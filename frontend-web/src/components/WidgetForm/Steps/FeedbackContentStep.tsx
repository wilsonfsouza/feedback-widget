import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../CloseButton';
import { FeedbackType, FEEDBACK_TYPES } from './FeedbackTypeStep';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedBackTypeInfo = FEEDBACK_TYPES[feedbackType];
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
      <div className="flex py-8 gap-2 w-full" />
    </>
  );
}

import bugImageUrl from '../../../assets/images/bug.svg';
import ideaImageUrl from '../../../assets/images/idea.svg';
import thoughtImageUrl from '../../../assets/images/thought.svg';

const FEEDBACK_TYPES = {
  BUG: {
    title: 'Issue',
    image: {
      source: bugImageUrl,
      alt: 'Image of an insect',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Image of a light bulb',
    },
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Image of a thought cloud',
    },
  },
};

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(FEEDBACK_TYPES).map(([key, value]) => {
        return (
          <button
            key={key}
            type="button"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}

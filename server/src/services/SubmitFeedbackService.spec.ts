import { SubmitFeedbackService } from './SubmitFeedbackService';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackService = new SubmitFeedbackService(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

describe('Submite Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64.hsuahsuahsua28928789',
      }),
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedbackService.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64.hsuahsuahsua28928789',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64.hsuahsuahsua28928789',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot format', async () => {
    await expect(
      submitFeedbackService.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'test.png',
      }),
    ).rejects.toThrow();
  });
});

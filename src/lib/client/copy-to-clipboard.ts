import { toast } from 'sonner';

export function copyToClipboard(content: string) {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      toast.success(`Copied '${content}' to clipboard!`);
    })
    .catch(() => {
      toast.error('Failed to copy to clipboard.');
    });
}

export const WAITING_LIST_STORAGE_KEY = 'viverci_waiting_email';
export const WAITING_LIST_REASON_KEY = 'viverci_waiting_reason';
export const WAITING_LIST_EVENT = 'viverci:waitinglist_updated';

export interface WaitingListSubmission {
  email: string;
  reason?: string;
}

export interface WaitingListResult {
  success: boolean;
  error?: string;
}

/**
 * Validates and submits an email (and optional reason) to the shared waiting list.
 */
export async function submitToWaitingList({
  email,
  reason,
}: WaitingListSubmission): Promise<WaitingListResult> {
  const trimmed = email.trim();

  // Basic validation
  if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
    return {
      success: false,
      error: 'Inserisci un indirizzo email valido.',
    };
  }

  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 450));

  try {
    localStorage.setItem(WAITING_LIST_STORAGE_KEY, trimmed);
    if (reason && reason.trim()) {
      localStorage.setItem(WAITING_LIST_REASON_KEY, reason.trim());
    } else {
      localStorage.removeItem(WAITING_LIST_REASON_KEY);
    }

    // Broadcast update to keep all forms on the page synchronized
    window.dispatchEvent(
      new CustomEvent(WAITING_LIST_EVENT, {
        detail: {
          email: trimmed,
          reason: reason?.trim() || null,
        },
      })
    );

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: 'Qualcosa non ha funzionato. Riprova tra poco.',
    };
  }
}

/**
 * Retrieves the currently saved waiting list data from localStorage.
 */
export function getSavedWaitingList(): { email: string | null; reason: string | null } {
  try {
    return {
      email: localStorage.getItem(WAITING_LIST_STORAGE_KEY),
      reason: localStorage.getItem(WAITING_LIST_REASON_KEY),
    };
  } catch {
    return { email: null, reason: null };
  }
}

/**
 * Removes the saved waiting list data from localStorage and notifies listeners.
 */
export function clearSavedWaitingList(): void {
  try {
    localStorage.removeItem(WAITING_LIST_STORAGE_KEY);
    localStorage.removeItem(WAITING_LIST_REASON_KEY);
    window.dispatchEvent(
      new CustomEvent(WAITING_LIST_EVENT, {
        detail: { email: null, reason: null },
      })
    );
  } catch {}
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LinkBioButton {
  id: string;
  label: string;
  subtext: string;
  url: string;
  intent: string;
  type: 'external' | 'interactive';
}

export interface CompatibilityResult {
  make: string;
  compatible: boolean;
  notes: string;
}

export interface ReadinessQuestion {
  id: string;
  question: string;
  type: 'select' | 'boolean' | 'multiple';
  options?: string[];
}

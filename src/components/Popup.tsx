import React from "react";
import type { TypeType } from "./hero";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  quote: string;
  setQuote: (q: string) => void;
  type: string;
  setType: (t: TypeType) => void;
  onApply: () => void;
}

const TYPE_OPTIONS = [
  { label: "True Focus", value: "true-focus" },
  { label: "Scramble", value: "scramble" },
  { label: "None", value: "none" },
];

const Popup: React.FC<PopupProps> = ({
  show,
  onClose,
  quote,
  setQuote,
  type,
  setType,
  onApply,
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-black text-text rounded-lg shadow-lg p-6 w-full max-w-md relative border border-gray-800">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Customize Hero</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Quote</label>
          <input
            className="w-full rounded border border-gray-700 bg-black text-white p-2"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Enter your quote..."
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Type</label>
          <select
            className="w-full rounded border border-gray-700 bg-black text-white p-2"
            value={type}
            onChange={(e) => setType(e.target.value as TypeType)}
          >
            {TYPE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <button
          className="w-full mt-2 py-2 rounded bg-gray-100 text-black font-semibold hover:bg-gray-200 transition-colors duration-150"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Popup;

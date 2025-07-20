// src/components/ui/card.jsx
export const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow p-4">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="mb-2 font-bold text-lg">{children}</div>
);

export const CardTitle = ({ children }) => (
  <div className="text-gray-800">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="text-sm text-gray-600">{children}</div>
);

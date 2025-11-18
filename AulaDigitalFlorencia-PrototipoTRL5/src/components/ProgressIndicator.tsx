interface ProgressIndicatorProps {
  label: string;
  current: number;
  target: number;
  icon?: string;
}

export function ProgressIndicator({ label, current, target, icon = "📊" }: ProgressIndicatorProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const isOnTarget = percentage >= 100;
  
  return (
    <div className="bg-white rounded-lg p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm">{label}</span>
        </div>
        <span className="text-sm">
          Meta: {target}%
        </span>
      </div>
      
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${
            isOnTarget ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-gray-800">{current}%</span>
        </div>
      </div>
    </div>
  );
}

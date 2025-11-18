interface CourseCardProps {
  title: string;
  description: string;
  duration?: string;
  level?: string;
}

export function CourseCard({ title, description, duration = "4 semanas", level = "Básico" }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-[0_2px_6px_rgba(0,0,0,0.1)] mb-4 border border-gray-200">
      <h4 className="mb-2 text-[#007acc]">{title}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex items-center gap-4 mb-3">
        <span className="text-xs bg-[#e6f2fa] text-[#004c75] px-3 py-1 rounded">
          ⏱️ {duration}
        </span>
        <span className="text-xs bg-[#e6f2fa] text-[#004c75] px-3 py-1 rounded">
          📊 Nivel: {level}
        </span>
      </div>
      <button className="bg-[#007acc] text-white px-4 py-2 rounded-lg hover:bg-[#005b99] transition-colors text-sm">
        Ver curso
      </button>
    </div>
  );
}

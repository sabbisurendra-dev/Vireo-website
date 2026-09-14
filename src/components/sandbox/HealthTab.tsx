import React, { useState } from 'react';
import { Activity, CloudSun, AlertTriangle, Check } from 'lucide-react';

export const HealthTab: React.FC = () => {
  const [healthTasks, setHealthTasks] = useState([
    { id: 1, text: "Hydrate 500ml upon waking", completed: true, priority: "High" },
    { id: 2, text: "20 min sunlight & morning walk", completed: true, priority: "Medium" },
    { id: 3, text: "Perform 45-min resistance training", completed: false, priority: "High" },
    { id: 4, text: "Review evening wind-down routine", completed: false, priority: "Low" }
  ]);
  const [weatherAlertOpen, setWeatherAlertOpen] = useState(false);

  const toggleTask = (id: number) => {
    setHealthTasks(healthTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Daily Health Hub & Priority Actionables
          </h4>
          <p className="text-xs text-slate-400">Click checkboxes below to update your live habit completion status.</p>
        </div>

        <button
          onClick={() => setWeatherAlertOpen(!weatherAlertOpen)}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-2 self-start sm:self-auto font-mono"
        >
          <CloudSun className="w-4 h-4 text-amber-400" />
          Weather Radar: 26°C Clear
        </button>
      </div>

      {weatherAlertOpen && (
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-300 text-xs space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Weather Snapshot & UV Index Alert
          </div>
          <div>UV Index: 6 (Moderate). High air quality index (AQI 42). Recommended time for outdoor exercise: 6:30 AM - 9:00 AM.</div>
        </div>
      )}

      {/* Habit Task Items */}
      <div className="space-y-2.5">
        {healthTasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
              task.completed
                ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-300'
                : 'bg-slate-900/80 border-slate-800 text-white hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                  task.completed
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                    : 'border-slate-600 bg-slate-800'
                }`}
              >
                {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span className={`text-sm font-medium ${task.completed ? 'line-through text-slate-400' : ''}`}>
                {task.text}
              </span>
            </div>

            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
              task.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-400'
            }`}>
              {task.priority} Priority
            </span>
          </div>
        ))}
      </div>

      {/* Trajectory Status */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Habit Completion Progress:</span>
        <span className="text-emerald-400 font-bold">
          {Math.round((healthTasks.filter(t => t.completed).length / healthTasks.length) * 100)}% Completed
        </span>
      </div>
    </div>
  );
};

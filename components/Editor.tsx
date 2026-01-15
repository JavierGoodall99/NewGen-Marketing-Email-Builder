import React from 'react';
import { EmailData, Metric } from '../types';

interface EditorProps {
  data: EmailData;
  onChange: (newData: EmailData) => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof EmailData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleMetricChange = (index: number, field: keyof Metric, value: string) => {
    const newMetrics = [...data.metrics] as [Metric, Metric, Metric];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    onChange({ ...data, metrics: newMetrics });
  };

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 bg-zinc-900 border-r border-zinc-800">
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Editor</h2>
        <p className="text-xs md:text-sm text-gray-400">Customize content and styling below.</p>
      </div>

      <div className="space-y-6 md:space-y-8 pb-12">
        {/* Header Section */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold border-b border-zinc-800 pb-2">Header Info</h3>
          
          <div>
             <label className="block text-xs font-medium text-gray-400 mb-1">Recipient Name Variable</label>
             <input
               type="text"
               value={data.recipientName}
               onChange={(e) => handleChange('recipientName', e.target.value)}
               className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
             />
          </div>
        </div>

        {/* Body Section */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold border-b border-zinc-800 pb-2">Body Content</h3>
          
          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-1">Introduction Paragraph</label>
            <textarea
              rows={4}
              value={data.introText}
              onChange={(e) => handleChange('introText', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-1">Value Proposition</label>
            <textarea
              rows={3}
              value={data.valuePropText}
              onChange={(e) => handleChange('valuePropText', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-gray-400 mb-1">Social Proof</label>
            <textarea
              rows={3}
              value={data.proofText}
              onChange={(e) => handleChange('proofText', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Metrics Section */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold border-b border-zinc-800 pb-2">Metrics</h3>
          <div className="grid grid-cols-1 gap-4">
            {data.metrics.map((metric, index) => (
              <div key={index} className="bg-black border border-zinc-800 p-3 rounded">
                <p className="text-xs text-cyan-700 font-bold mb-2">Metric {index + 1}</p>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1">
                    <label className="block text-[10px] text-gray-500">Value</label>
                    <input
                      type="text"
                      value={metric.value}
                      onChange={(e) => handleMetricChange(index, 'value', e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded p-1 text-sm text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                  <div className="w-16">
                    <label className="block text-[10px] text-gray-500">Suffix</label>
                    <input
                      type="text"
                      value={metric.suffix}
                      onChange={(e) => handleMetricChange(index, 'suffix', e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded p-1 text-sm text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>
                 <div>
                    <label className="block text-[10px] text-gray-500">Label</label>
                    <input
                      type="text"
                      value={metric.label}
                      onChange={(e) => handleMetricChange(index, 'label', e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded p-1 text-sm text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold border-b border-zinc-800 pb-2">Call to Action</h3>
          
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Button Text</label>
            <input
              type="text"
              value={data.ctaText}
              onChange={(e) => handleChange('ctaText', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Link (URL or mailto:)</label>
            <input
              type="text"
              value={data.ctaLink}
              onChange={(e) => handleChange('ctaLink', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none font-mono text-xs"
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-cyan-500 font-semibold border-b border-zinc-800 pb-2">Footer</h3>
          
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Sign-off Name</label>
            <input
              type="text"
              value={data.signoffName}
              onChange={(e) => handleChange('signoffName', e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
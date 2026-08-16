'use client';

import React, { useRef } from 'react';
import { Input } from '@/components/ui/Input';
import { useResumeStore } from '@/store/resumeStore';
import { MdPerson, MdUpload, MdDelete } from 'react-icons/md';

export function PersonalForm() {
  const personal = useResumeStore((s) => s.resume.personal);
  const showPhoto = useResumeStore((s) => s.resume.settings.showPhoto);
  const updatePersonal = useResumeStore((s) => s.updatePersonal);
  const updateSettings = useResumeStore((s) => s.updateSettings);
  const fileRef = useRef<HTMLInputElement>(null);

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Photo must be under 2 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      updatePersonal({ photo: reader.result as string });
      updateSettings({ showPhoto: true });
    };
    reader.readAsDataURL(file);
  }

  function removePhoto() {
    updatePersonal({ photo: undefined });
    updateSettings({ showPhoto: false });
  }

  return (
    <div className="p-4 space-y-4">
      {/* Photo */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50 shrink-0 overflow-hidden">
          {personal.photo ? (
            <img src={personal.photo} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <MdPerson size={28} className="text-slate-400" />
          )}
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-300 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <MdUpload size={14} /> Upload Photo
          </button>
          {personal.photo && (
            <button
              type="button"
              onClick={removePhoto}
              className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-red-200 bg-white text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
            >
              <MdDelete size={14} /> Remove
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
        </div>
      </div>

      {/* Name + Title */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Full Name *"
          placeholder="Alex Morgan"
          value={personal.fullName}
          onChange={(e) => updatePersonal({ fullName: e.target.value })}
        />
        <Input
          label="Professional Title"
          placeholder="Senior Software Engineer"
          value={personal.jobTitle}
          onChange={(e) => updatePersonal({ jobTitle: e.target.value })}
        />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Email"
          type="email"
          placeholder="alex@email.com"
          value={personal.email}
          onChange={(e) => updatePersonal({ email: e.target.value })}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={personal.phone}
          onChange={(e) => updatePersonal({ phone: e.target.value })}
        />
      </div>

      <Input
        label="Location"
        placeholder="San Francisco, CA"
        value={personal.location}
        onChange={(e) => updatePersonal({ location: e.target.value })}
      />

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          label="Website"
          placeholder="yoursite.com"
          value={personal.website}
          onChange={(e) => updatePersonal({ website: e.target.value })}
        />
        <Input
          label="LinkedIn"
          placeholder="linkedin.com/in/you"
          value={personal.linkedin}
          onChange={(e) => updatePersonal({ linkedin: e.target.value })}
        />
      </div>
      <Input
        label="GitHub"
        placeholder="github.com/you"
        value={personal.github}
        onChange={(e) => updatePersonal({ github: e.target.value })}
      />
    </div>
  );
}

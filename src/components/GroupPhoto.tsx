
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const GroupPhoto = () => {
  return (
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full h-full">
              <img 
                src="/group-photo.jpg" 
                alt="Hackathon Group Photo" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl md:text-2xl font-medium">
                  TechInnovate 2025 Participants
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] max-h-[90vh]">
            <img 
              src="/group-photo.jpg" 
              alt="Hackathon Group Photo" 
              className="w-full h-full object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GroupPhoto;

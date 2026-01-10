'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  alt?: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  alt = 'Image'
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-60 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-60 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image/Video Container */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
          {currentImage.endsWith('.mp4') || currentImage.endsWith('.MP4') ? (
            <video
              src={currentImage}
              controls
              className="w-full h-full object-contain"
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={currentImage}
              alt={`${alt} ${currentIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          )}
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageLightbox;


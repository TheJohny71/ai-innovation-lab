// src/app/components/ui/loading.tsx
export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
          <div className="w-12 h-12 rounded-full border-r-2 border-l-2 border-teal-500 animate-spin absolute top-0 left-0" 
               style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        </div>
      </div>
    );
  }
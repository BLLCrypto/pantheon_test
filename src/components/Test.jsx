import React from 'react';

function DiagonalBorderCard() {
  return (
    <div class="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative flex m-auto h-40 w-40 overflow-hidden rounded-lg">
    <div class="absolute top-8 left-8 m-auto h-96 w-96 bg-blue-200 rotate-45"></div>
      <div class="top-3 z-30 right-3 m-auto rounded-lg h-32 w-32 bg-yellow-300"></div>
  </div>
</div>
  );
}

export default DiagonalBorderCard;
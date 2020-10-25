import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import useWindow from '@/hooks/useWindow';
const Bg: React.FC = () => {
  const win = useWindow();
  return win ? <ParticlesBg type="cobweb" bg /> : null;
};

export default Bg;

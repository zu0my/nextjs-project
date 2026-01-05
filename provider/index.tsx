"use client";
import type { DeviceDetectorResult } from "device-detector-js";
import { DeviceDetectorContext } from "../context/device-detector-context";

interface ProviderProps {
  children: React.ReactNode;
  device: DeviceDetectorResult;
}

export default function Provider({ children, device }: ProviderProps) {
  return (
    <DeviceDetectorContext.Provider value={{ device }}>
      {children}
    </DeviceDetectorContext.Provider>
  );
}

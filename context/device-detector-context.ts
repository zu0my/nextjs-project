import type { DeviceDetectorResult } from "device-detector-js";
import { createContext } from "react";

interface DeviceDetectorContextType {
  device: DeviceDetectorResult;
}

export const DeviceDetectorContext =
  createContext<DeviceDetectorContextType | null>(null);

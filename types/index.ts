declare namespace UICommon {
  interface StyleProps {
    className?: string;
    style?: React.CSSProperties;
  }
}

declare namespace ResData {
  interface Success<T> {
    success: true;
    data: T;
  }

  interface Error {
    success: false;
    error: {
      code: number;
      message: string;
    };
  }
}

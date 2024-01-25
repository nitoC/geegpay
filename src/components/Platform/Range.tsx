import { FC, useEffect, useRef, useState } from "react";
import { IRange } from "../../interfaces/interfaces";

interface IRangeData {
  data: IRange;
  classVal: string;
}

const Range: FC<IRangeData> = ({ data, classVal }) => {
  const { title, value, total } = data;
  const Ref = useRef(null as HTMLDivElement | null);
  const [trackWidth, setTrackWidth] = useState<number>(0);

  useEffect(() => {
    const rangeHandler = (value: number, title: string, total: number) => {
      if (Ref && Ref.current && Ref.current) {
        const result: number = Ref.current?.offsetWidth * (value / total);
        console.log(result);
        console.log(title);
        setTrackWidth(result);
      }
    };
    rangeHandler(value, title, total);
  }, [title, total, value]);

  return (
    <div>
      <div ref={Ref} className="track">
        <div style={{ width: trackWidth }} className={`thumb ${classVal}`} />
      </div>
    </div>
  );
};

export default Range;

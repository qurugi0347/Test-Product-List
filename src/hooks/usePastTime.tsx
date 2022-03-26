import React, {useMemo} from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const usePastTime = (datetime?: dayjs.ConfigType): string => {
  const fromNowText = useMemo(() => {
    return dayjs(datetime).fromNow();
  }, [datetime]);

  return fromNowText;
};

export default usePastTime;

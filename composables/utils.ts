export const  roundDownToMultiple = (value : number) => {
    return (value % 2750 === 0) ? value : value - (value % 2750);
}

export const cekwa = async () => {
    const gtm = useGtm();
    console.log("wa");
    try {
      gtm!.trackEvent({
        event: "hit_wa",
      });
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  export const cekpenawaran = async () => {
    const gtm = useGtm();
    console.log("wa");
    try {
      gtm!.trackEvent({
        event: "hit_penawaran",
      });
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };


  export const cekaichat = async () => {
    const gtm = useGtm();
    console.log("wa");
    try {
      gtm!.trackEvent({
        event: "hit_aichat",
      });
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };
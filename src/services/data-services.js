export const getMonthId = (month) => {
    switch (month) {
        case "01":
            return "Januari";
        case "02":
            return "Februari";
        case "03":
            return "Maret";
        case "04":
            return "April";
        case "05":
            return "Mei";
        case "06":
            return "Juni";
        case "07":
            return "Juli";
        case "08":
            return "Agustus";
        case "09":
            return "September";
        case "10":
            return "Oktober";
        case "11":
            return "November";
        case "12":
            return "Desember";
        default:
            return "";
    }
};

export const convertToRupiahText = angka => {
    let rupiah = "";
    let angkaRev = angka
      .toString()
      .split("")
      .reverse()
      .join("");
    for (let i = 0; i < angkaRev.length; i++)
      if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
}

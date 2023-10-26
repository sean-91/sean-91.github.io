import { BlogPageInfo, ImageWithInfo } from "../model/BlogPageInfo";

import laughingKookaburra from "./images/laughingKookaburra.jpg"
import maskedLapwing from "./images/maskedLapwing.jpg"
import noisyMiner from "./images/noisyMiner.jpg"
import piedCurrawong from "./images/piedCurrawong.jpg"
import australianMagpie from "./images/australianMagpie.jpg"
import rockPigeon from "./images/rockPigeon.jpg"
import commonMyna from "./images/commonMyna.jpg"
import rainbowLorikeet from "./images/rainbowLorikeet.jpg"
import sulphurCrestedCockatoo from "./images/sulphurCrestedCockatoo.jpg"
import australianIbis from "./images/australianIbis.jpg"

export const pages = [
    new BlogPageInfo(
        "Laughing Kookaburra",
        "First birds I took a photo of specifically for the purpose of documenting bird watching. So it begins...",
        [new ImageWithInfo(laughingKookaburra, "27 August 2022", "Vincentia, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Masked Lapwing",
        "I always called these \"Plover\"s",
        [new ImageWithInfo(maskedLapwing, "27 August 2022", "Vincentia, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Noisy Miner",
        "I begrudgingly accept them because they're native birds, but not a fan.",
        [new ImageWithInfo(noisyMiner, "29 August 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Pied Currawong",
        "One of my favourites. Wonderful song.",
        [new ImageWithInfo(piedCurrawong, "29 August 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Australian Magpie",
        "Classic.",
        [new ImageWithInfo(australianMagpie, "3 September 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Rock Pigeon",
        "Bulk standard. Terrible first picture, iPhone camera etc.",
        [new ImageWithInfo(rockPigeon, "6 September 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Common Myna",
        "I don't like these ones...",
        [new ImageWithInfo(commonMyna, "11 September 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Rainbow Lorikeet",
        "Pretty and loud.",
        [new ImageWithInfo(rainbowLorikeet, "19 September 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Sulphur-crested Cockatoo",
        "Less pretty, still loud.",
        [new ImageWithInfo(sulphurCrestedCockatoo, "23 September 2022", "Sydney, NSW, Australia")]
    ),
    new BlogPageInfo(
        "Australian Ibis",
        "Bin-chicken.",
        [new ImageWithInfo(australianIbis, "30 September 2022", "Sydney, NSW, Australia")]
    ),
]

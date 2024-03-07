import roses from "../assets/roses/roses.avif"
import roses1 from "../assets/roses/roses1.avif"
import roses2 from "../assets/roses/roses2.avif"
import roses3 from "../assets/roses/roses3.avif"
import roses4 from "../assets/roses/roses4.avif"
import roses5 from "../assets/roses/roses5.avif"

const arr = [roses1,roses2,roses3,roses4,roses5,roses];

export default function loadRoses() {
    return arr[Math.floor(Math.random() * arr.length)];
}
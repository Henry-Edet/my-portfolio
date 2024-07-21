import gsap from "gsap";
import "@/components/style.css";

let tl = gsap.timeline();

console.log("New");

tl.from(".person", {
  stagger: 0.2,
  opacity: 0,
  x: -20,
});

tl.from(".avatar .profile-image", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});

tl.from(".person__role", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});

tl.from(".person__details", {
  stagger: 0.2,
  opacity: 0,
  y: 20,
});

tl.from(".social-buttons", {
  stagger: 0.2,
  opacity: 0,
});

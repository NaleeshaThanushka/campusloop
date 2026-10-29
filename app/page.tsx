"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Laptop,
  Search,
  ShoppingBag,
  Heart,
  Menu,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  GraduationCap,
  PackageSearch,
  Plus,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Books", icon: BookOpen, color: "bg-violet-100 text-violet-700" },
  { name: "Electronics", icon: Laptop, color: "bg-blue-100 text-blue-700" },
  { name: "Study Notes", icon: GraduationCap, color: "bg-emerald-100 text-emerald-700" },
  { name: "Accessories", icon: Smartphone, color: "bg-orange-100 text-orange-700" },
];

const products = [
  {
    id: 1,
    title: "Database Systems Textbook",
    category: "Books",
    price: 1800,
    condition: "Good",
    seller: "Sample Student",
    emoji: "📚",
    background: "bg-violet-50",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 3500,
    condition: "Like New",
    seller: "Sample Student",
    emoji: "🎧",
    background: "bg-blue-50",
  },
  {
    id: 3,
    title: "Software Engineering Notes",
    category: "Study Notes",
    price: 450,
    condition: "New",
    seller: "Sample Student",
    emoji: "📝",
    background: "bg-emerald-50",
  },
  {
    id: 4,
    title: "Scientific Calculator",
    category: "Accessories",
    price: 2200,
    condition: "Good",
    seller: "Sample Student",
    emoji: "🧮",
    background: "bg-orange-50",
  },
];

const formatPrice = (price: number) =>
  `LKR ${price.toLocaleString("en-LK")}`;

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = `${product.title} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
              <ShoppingBag size={22} />
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Campus<span className="text-violet-600">Loop</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="text-violet-700">
              Home
            </Link>
            <a href="#marketplace" className="transition hover:text-violet-700">
              Marketplace
            </a>
            <Link href="/lost-found" className="transition hover:text-violet-700">
              Lost & Found
            </Link>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-100"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
            >
              Join CampusLoop
            </Link>
          </div>

          <button
            type="button"
            aria-label="Menu"
            className="rounded-lg p-2 hover:bg-slate-100 sm:hidden"
            onClick={() => {
              document.getElementById("mobile-menu")?.classList.toggle("hidden");
            }}
          >
            <Menu size={24} />
          </button>
        </div>

        <div id="mobile-menu" className="hidden border-t border-slate-100 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link href="/">Home</Link>
            <a href="#marketplace">Marketplace</a>
            <Link href="/lost-found">Lost & Found</Link>
            <Link href="/login">Log in</Link>
            <Link href="/register">Join CampusLoop</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
              <Sparkles size={16} />
              Made for campus life
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your campus.
              <br />
              Your community.
              <br />
              <span className="text-violet-600">One marketplace.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Buy, sell, and discover student essentials. Find your next
              textbook, pass on useful gadgets, and help lost belongings find
              their way home.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#marketplace"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Explore marketplace
                <ArrowRight size={18} />
              </a>

              <Link
                href="/sell"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold transition hover:border-violet-300 hover:bg-violet-50"
              >
                <Plus size={18} />
                Sell an item
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-600" />
                Student-focused community
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle size={18} className="text-violet-600" />
                Connect with students
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-violet-200/50 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Your campus marketplace
                  </p>
                  <h2 className="mt-1 text-xl font-bold">Discover something useful</h2>
                </div>
                <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
                  <ShoppingBag size={25} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-violet-50 p-5">
                  <BookOpen size={28} className="text-violet-600" />
                  <p className="mt-4 font-bold">**Study for free**

Free notes & past papers

Share your knowledge. Help another student learn.</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Books & notes
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <Laptop size={28} className="text-blue-600" />
                  <p className="mt-4 font-bold">Find your tech</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Gadgets & devices
                  </p>
                </div>

                <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <PackageSearch size={25} />
                  </div>
                  <div>
                    <p className="font-bold">Lost something?</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Report it or help someone find their belongings.
                    </p>
                  </div>
                  <ArrowRight size={20} className="ml-auto shrink-0 text-slate-400" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-300">The campus connection</p>
                <p className="mt-1 text-lg font-bold">
                  Give useful things a second life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Browse by category
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What are you looking for?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Explore student essentials and find useful items for your next
            semester.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.name);
                  document.getElementById("marketplace")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg sm:p-6"
              >
                <div className={`inline-flex rounded-xl p-3 ${category.color}`}>
                  <Icon size={25} />
                </div>
                <h3 className="mt-4 font-bold">{category.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Explore items
                </p>
                <ArrowRight
                  size={18}
                  className="mt-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-violet-600"
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Marketplace */}
      <section id="marketplace" className="scroll-mt-20 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
                Student marketplace
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                Explore available items
              </h2>
              <p className="mt-3 text-slate-600">
                Useful finds for your campus life.
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                placeholder="Search books, gadgets..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {["All", ...categories.map((category) => category.name)].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-violet-600 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-700"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative flex h-48 items-center justify-center ${product.background}`}
                >
                  <span className="text-7xl transition duration-300 group-hover:scale-110">
                    {product.emoji}
                  </span>

                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {product.condition}
                  </span>

                  <button
                    type="button"
                    aria-label={`Save ${product.title}`}
                    onClick={() =>
                      alert("Wishlist will be available after account setup.")
                    }
                    className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-600 shadow-sm transition hover:text-rose-500"
                  >
                    <Heart size={18} />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 min-h-12 font-bold leading-6">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    Listed by {product.seller}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
                    <span className="text-lg font-extrabold">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        alert("Item details and chat will be available in a later step.")
                      }
                      className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
                    >
                      View item
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
              <Search className="mx-auto text-slate-400" size={35} />
              <h3 className="mt-4 text-lg font-bold">No items found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another search term or choose a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="mt-4 font-semibold text-violet-700 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="mt-6 text-center text-xs text-slate-500">
            Demo listings only. These items and sellers are sample data, not
            verified offers from actual students.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            Simple and useful
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            Your campus, connected
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Make student life easier with a community built around sharing,
            discovering, and helping each other.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Search size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold">1. Discover</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Search for books, study materials, gadgets, and other useful
              items.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <ShoppingBag size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold">2. Buy or sell</h3>
            <p className="mt-3 leading-7 text-slate-600">
              List items you no longer need and connect with interested
              students.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <PackageSearch size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold">3. Help each other</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Report lost belongings and help useful items find their way
              back home.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-violet-700 px-7 py-10 text-white sm:px-10 md:flex-row md:items-center lg:px-14 lg:py-14">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to join the loop?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-violet-100">
              Discover useful items, share what you have, and be part of a
              more connected campus community.
            </p>
          </div>
          <Link
            href="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-violet-700 transition hover:bg-violet-50"
          >
            Get started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white">
              <ShoppingBag size={19} />
            </div>
            <span className="font-extrabold">
              Campus<span className="text-violet-600">Loop</span>
            </span>
          </Link>

          <p className="text-sm text-slate-500">
            An independent student community project.
          </p>

          <p className="text-sm text-slate-500">
            © 2026 CampusLoop
          </p>
        </div>
      </footer>
    </main>
  );
}
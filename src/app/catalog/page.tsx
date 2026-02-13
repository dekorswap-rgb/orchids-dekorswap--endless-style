"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CatalogItem {
    id: string;
    name: string;
    category: string;
    styles: string[];
    rooms: string[];
    imageUrl: string;
    description: string;
    availability: string;
    tags: string[];
}

interface CatalogData {
    items: CatalogItem[];
    categories: Array<{ id: string; name: string; emoji: string }>;
    rooms: Array<{ id: string; name: string; emoji: string }>;
    styles: Array<{ id: string; name: string; emoji: string }>;
}

function CatalogContent() {
    const searchParams = useSearchParams();
    const [catalogData, setCatalogData] = useState<CatalogData | null>(null);
    const [filteredItems, setFilteredItems] = useState<CatalogItem[]>([]);
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        fetch("/data/catalog-items.json")
            .then((res) => res.json())
            .then((data) => {
                setCatalogData(data);
                setFilteredItems(data.items);

                // Apply URL parameters if present
                const styleParam = searchParams.get("style");
                const roomParam = searchParams.get("room");

                if (styleParam) {
                    setSelectedStyle(styleParam);
                    setShowFilters(true); // Auto-open filters to show what's applied
                }

                if (roomParam) {
                    setSelectedRoom(roomParam);
                    setShowFilters(true); // Auto-open filters to show what's applied
                }
            });
    }, [searchParams]);

    useEffect(() => {
        if (!catalogData) return;

        let filtered = catalogData.items;

        if (selectedStyle) {
            filtered = filtered.filter((item) => item.styles.includes(selectedStyle));
        }
        if (selectedRoom) {
            filtered = filtered.filter((item) => item.rooms.includes(selectedRoom));
        }
        if (selectedCategory) {
            filtered = filtered.filter((item) => item.category === selectedCategory);
        }
        if (searchQuery) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        setFilteredItems(filtered);
    }, [selectedStyle, selectedRoom, selectedCategory, searchQuery, catalogData]);

    if (!catalogData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    const activeFiltersCount = [selectedStyle, selectedRoom, selectedCategory].filter(Boolean).length;

    const clearAllFilters = () => {
        setSelectedStyle(null);
        setSelectedRoom(null);
        setSelectedCategory(null);
        setSearchQuery("");
    };

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Browse Our Collection
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our curated selection of home décor items. Filter by style, room, or category to find your perfect pieces.
                    </p>
                </div>

                {/* Search and Filter Toggle */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <div className="relative w-full sm:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>
                    <Button
                        variant={activeFiltersCount > 0 ? "default" : "outline"}
                        onClick={() => setShowFilters(!showFilters)}
                        className="rounded-full px-6 relative"
                    >
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                        {activeFiltersCount > 0 && (
                            <span className="ml-2 bg-white text-accent w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold">
                                {activeFiltersCount}
                            </span>
                        )}
                        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                    </Button>
                </div>

                {/* Collapsible Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden mb-8"
                        >
                            <div className="bg-white rounded-2xl border border-border p-6 space-y-6">
                                {/* Active Filters Summary */}
                                {activeFiltersCount > 0 && (
                                    <div className="flex items-center justify-between pb-4 border-b border-border">
                                        <div className="flex flex-wrap gap-2">
                                            {selectedStyle && (
                                                <Badge className="bg-accent text-white pl-3 pr-2 py-1.5">
                                                    {catalogData.styles.find(s => s.id === selectedStyle)?.emoji} {catalogData.styles.find(s => s.id === selectedStyle)?.name}
                                                    <button onClick={() => setSelectedStyle(null)} className="ml-2 hover:bg-white/20 rounded-full p-0.5">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </Badge>
                                            )}
                                            {selectedRoom && (
                                                <Badge className="bg-accent text-white pl-3 pr-2 py-1.5">
                                                    {catalogData.rooms.find(r => r.id === selectedRoom)?.emoji} {catalogData.rooms.find(r => r.id === selectedRoom)?.name}
                                                    <button onClick={() => setSelectedRoom(null)} className="ml-2 hover:bg-white/20 rounded-full p-0.5">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </Badge>
                                            )}
                                            {selectedCategory && (
                                                <Badge className="bg-accent text-white pl-3 pr-2 py-1.5">
                                                    {catalogData.categories.find(c => c.id === selectedCategory)?.emoji} {catalogData.categories.find(c => c.id === selectedCategory)?.name}
                                                    <button onClick={() => setSelectedCategory(null)} className="ml-2 hover:bg-white/20 rounded-full p-0.5">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </Badge>
                                            )}
                                        </div>
                                        <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-accent hover:text-accent/80">
                                            Clear All
                                        </Button>
                                    </div>
                                )}

                                {/* Filter Groups */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Styles */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary mb-3">Style</h3>
                                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                                            <button
                                                onClick={() => setSelectedStyle(null)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedStyle === null
                                                    ? "bg-accent text-white"
                                                    : "hover:bg-accent/5"
                                                    }`}
                                            >
                                                All Styles
                                            </button>
                                            {catalogData.styles.map((style) => (
                                                <button
                                                    key={style.id}
                                                    onClick={() => setSelectedStyle(style.id)}
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedStyle === style.id
                                                        ? "bg-accent text-white"
                                                        : "hover:bg-accent/5"
                                                        }`}
                                                >
                                                    {style.emoji} {style.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Rooms */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary mb-3">Room</h3>
                                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                                            <button
                                                onClick={() => setSelectedRoom(null)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedRoom === null
                                                    ? "bg-accent text-white"
                                                    : "hover:bg-accent/5"
                                                    }`}
                                            >
                                                All Rooms
                                            </button>
                                            {catalogData.rooms.map((room) => (
                                                <button
                                                    key={room.id}
                                                    onClick={() => setSelectedRoom(room.id)}
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedRoom === room.id
                                                        ? "bg-accent text-white"
                                                        : "hover:bg-accent/5"
                                                        }`}
                                                >
                                                    {room.emoji} {room.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div>
                                        <h3 className="text-sm font-bold text-primary mb-3">Category</h3>
                                        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                                            <button
                                                onClick={() => setSelectedCategory(null)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === null
                                                    ? "bg-accent text-white"
                                                    : "hover:bg-accent/5"
                                                    }`}
                                            >
                                                All Categories
                                            </button>
                                            {catalogData.categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => setSelectedCategory(category.id)}
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                                                        ? "bg-accent text-white"
                                                        : "hover:bg-accent/5"
                                                        }`}
                                                >
                                                    {category.emoji} {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing {filteredItems.length} of {catalogData.items.length} items
                    </p>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                            className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-square relative overflow-hidden">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {item.availability === "coming-soon" && (
                                    <div className="absolute top-3 right-3">
                                        <Badge className="bg-accent text-white">Coming Soon</Badge>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    {item.styles.slice(0, 2).map((styleId) => {
                                        const style = catalogData.styles.find((s) => s.id === styleId);
                                        return style ? (
                                            <Badge key={styleId} variant="outline" className="text-xs">
                                                {style.emoji} {style.name}
                                            </Badge>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-lg text-muted-foreground mb-4">No items found matching your filters.</p>
                        <Button
                            onClick={clearAllFilters}
                            variant="outline"
                            className="rounded-full"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CatalogPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        }>
            <CatalogContent />
        </Suspense>
    );
}

import { useEffect, useState } from "react";
import GoogleReviewCard from "./GoogleReviewCard.tsx";
import ReviewHeader from "./ReviewHeader.tsx";

interface Review {
    author_name: string;
    profile_photo_url: string;
    author_url: string;
    text: string;
    rating: number;
    relative_time_description: string;
    time: number;
}

interface PlaceData {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: Review[];
}

const GoogleReviews = () => {
    const [place, setPlace] = useState<PlaceData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const response = await fetch("/api/google-reviews");
            const data = await response.json();

            if (data?.result?.reviews && Array.isArray(data.result.reviews)) {
                const sorted = [...(data.result.reviews || [])].sort((a, b) => b.time - a.time);
                setPlace({
                    name: data.result.name,
                    rating: data.result.rating,
                    user_ratings_total: data.result.user_ratings_total,
                    reviews: sorted
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados do local:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    if (loading) return <p className="text-center text-sm">Carregando avaliações...</p>;
    if (!place) return <p className="text-center text-sm text-red-500">Não foi possível carregar os dados.</p>;
    return (
        <section className="px-4 py-8  mx-auto">
            <ReviewHeader place={place} />
            <div>
                <div data-aos="fade-up" className="grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {place.reviews.map((review, index) => (
                        <GoogleReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
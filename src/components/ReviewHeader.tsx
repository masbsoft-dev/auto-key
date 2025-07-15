interface PlaceInfo {
    name: string;
    rating: number;
    user_ratings_total: number;
}

const ReviewHeader = ({ place }: { place: PlaceInfo }) => {
    const fullStars = Math.round(place.rating); // arredonda a nota

    return (
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-base font-bold text-gray-800">
                Google avaliações
            </h3>
            <h2 className="text-2xl font-bold text-gray-800">
                {place.name}
            </h2>
            <div className="flex items-center gap-3 mt-3">
                {/* Estrelas */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 ${index < fullStars ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.955h4.162a1
                1 0 01.592 1.806l-3.37 2.45
                1.286 3.955a1 1 0 01-1.538 1.118L10
                13.347l-3.369 2.45a1 1 0
                01-1.538-1.118l1.286-3.955-3.37-2.45a1
                1 0 01.592-1.806h4.162l1.286-3.955z" />
                        </svg>
                    ))}
                </div>

                {/* Nota média */}
                <span className="text-lg font-medium text-gray-800">
          {place.rating.toFixed(1)} / 5.0
        </span>

                {/* Total de avaliações */}
                <span className="text-sm text-gray-500">
          ({place.user_ratings_total} avaliações)
        </span>
            </div>
        </div>
    );
};

export default ReviewHeader;
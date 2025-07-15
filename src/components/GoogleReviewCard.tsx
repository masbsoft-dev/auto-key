interface Review {
    author_name: string;
    profile_photo_url: string;
    author_url: string;
    text: string;
    rating: number;
    relative_time_description: string;
    time: number;
}

const GoogleReviewCard = ({ review } : { review: Review }) => {
    const { text, rating } = review;

    return (
        <div className="bg-gray-50 rounded-xl p-5 max-w-2xl">
            <div className="w-full flex items-start">
            <img
                src={review.profile_photo_url}
                alt={review.author_name || "Foto"}
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
            <div className="flex-1">
                <div className="flex flex-col text-base font-semibold text-gray-900">
                    <a className="text-base font-semibold text-gray-900 hover:underline"
                       target="_blank" href={review.author_url} >{review.author_name}</a>
                    <span className="text-xs text-gray-400">{review.relative_time_description}</span>
                    <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.955h4.162a1 1 0 01.592 1.806l-3.37 2.45
                                1.286 3.955a1 1 0 01-1.538 1.118L10 13.347l-3.369 2.45a1 1 0 01-1.538-1.118
                                l1.286-3.955-3.37-2.45a1 1 0 01.592-1.806h4.162l1.286-3.955z"/>
                            </svg>
                        ))}
                    </div>

                </div>
            </div>
            </div>
            <div className="w-full flex">
            <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                {text}
            </p>
            </div>
        </div>
    );
};
export default GoogleReviewCard;
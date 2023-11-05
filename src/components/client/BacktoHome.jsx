"use client";

export default function BackButton() {

    const handleBack = () => {
        window.location.href = "/unauthorized";
    }

    return (
        <div>
            <button className="text-xl font-semibold py-2 px-5 bg-red-200 w-40 rounded-lg" onClick={handleBack}>Back to Home</button>
        </div>
    )
}
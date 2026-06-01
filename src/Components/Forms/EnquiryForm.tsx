"use client";

import React, { FormEvent, useState } from "react";

type EnquiryFormData = {
    fullName: string;
    email: string;
    people: string;
    travelDate: string;
    details: string;
    saveInfo: boolean;
};

const initialFormData: EnquiryFormData = {
    fullName: "",
    email: "",
    people: "",
    travelDate: "",
    details: "",
    saveInfo: false,
};

const EnquiryForm = () => {
    const [formData, setFormData] =
        useState<EnquiryFormData>(initialFormData);

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            // API CALL HERE
            console.log("Form Submitted:", formData);

            // Reset Form
            setFormData(initialFormData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="enquiry-form-wrapper"
        >
            <div className="row g-4 mb-50">
                {/* Full Name */}
                <div className="col-md-6">
                    <div className="form-inner">
                        <label htmlFor="fullName">
                            Full Name
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Your Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                    <div className="form-inner">
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Number of People */}
                <div className="col-md-6">
                    <div className="form-inner">
                        <label htmlFor="people">
                            Number of People*
                        </label>

                        <input
                            id="people"
                            name="people"
                            type="number"
                            min={1}
                            placeholder="Number of people"
                            value={formData.people}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Travel Date */}
                <div className="col-md-6">
                    <div className="form-inner">
                        <label htmlFor="travelDate">
                            Travel Date
                        </label>

                        <div className="date-field-area relative">
                            <input
                                id="travelDate"
                                name="travelDate"
                                type="date"
                                value={formData.travelDate}
                                onChange={handleChange}
                                className="w-full"
                                required
                            />

                            <svg
                                className="calender-icon absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path d="M12.1953 1.09375H10.9375V0.4375C10.9375 0.195891 10.7416 0 10.5 0C10.2584 0 10.0625 0.195891 10.0625 0.4375V1.09375H3.9375V0.4375C3.9375 0.195891 3.74164 0 3.5 0C3.25836 0 3.0625 0.195891 3.0625 0.4375V1.09375H1.80469C0.809566 1.09375 0 1.90332 0 2.89844V12.1953C0 13.1904 0.809566 14 1.80469 14H12.1953C13.1904 14 14 13.1904 14 12.1953V2.89844C14 1.90332 13.1904 1.09375 12.1953 1.09375ZM13.125 12.1953C13.125 12.7088 12.7088 13.125 12.1953 13.125H1.80469C1.29123 13.125 0.875 12.7088 0.875 12.1953V4.94922C0.875 4.91296 0.889404 4.87818 0.915044 4.85254C0.940684 4.8269 0.975459 4.8125 1.01172 4.8125H12.9883C13.0245 4.8125 13.0593 4.8269 13.085 4.85254C13.1106 4.87818 13.125 4.91296 13.125 4.94922V12.1953Z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Tour Details */}
                <div className="col-lg-12">
                    <div className="form-inner">
                        <label htmlFor="details">
                            Tour Details
                        </label>

                        <textarea
                            id="details"
                            name="details"
                            placeholder="Write about tour info"
                            value={formData.details}
                            onChange={handleChange}
                            rows={5}
                        />
                    </div>
                </div>

                {/* Checkbox */}
                <div className="col-md-12">
                    <div className="form-inner2">
                        <div className="form-check flex items-center gap-2">
                            <input
                                id="formCheck2"
                                name="saveInfo"
                                type="checkbox"
                                className="form-check-input"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                            />

                            <label
                                className="form-check-label"
                                htmlFor="formCheck2"
                            >
                                Save my email address &amp; name
                                when I comment further time.
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="form-inner">
                <button
                    type="submit"
                    disabled={loading}
                    className="primary-btn1 black-bg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span>
                        {loading
                            ? "Submitting..."
                            : "Post Comment"}

                        <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                        </svg>
                    </span>

                    <span>
                        {loading
                            ? "Submitting..."
                            : "Post Comment"}

                        <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    );
};

export default EnquiryForm;
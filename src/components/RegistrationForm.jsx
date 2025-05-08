import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function RegistrationForm() {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = (formData) => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email.';
        if (!formData.phone.match(/^[0-9]{8,15}$/)) newErrors.phone = 'Phone must be 8-15 digits.';
        if (!formData.cpr.match(/^[0-9]{9}$/)) newErrors.cpr = 'CPR must be exactly 9 digits.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: form.current.name.value,
            email: form.current.email.value,
            phone: form.current.phone.value,
            cpr: form.current.cpr.value,
            experience: form.current.experience.value
        };

        const validationErrors = validate(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const message = `
            New Registration:
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            CPR: ${formData.cpr}
            Experience Level: ${formData.experience === 'junior' ? 'Junior (7-17 years)' : 'Adult (18+)'}
        `;
        setLoading(true);
        emailjs.send(
            'service_mvk5jus',
            'template_ea5sw6p',
            { message },
            'maULo2qcCGKkHguaP'
        )
            .then(() => {
                alert(`Thanks for registering, ${formData.name}! We've sent your details.`);
                form.current.reset();
                setErrors({});
            })
            .catch((error) => {
                alert('Something went wrong. Please try again.');
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });

    };

    return (
        <section id='register' className="py-12 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
            <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <FormInput
                        label="Full Name"
                        name="name"
                        error={errors.name}
                        required
                    />
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        error={errors.email}
                        required
                    />
                    <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        error={errors.phone}
                        required
                    />
                    <FormInput
                        label="CPR Number"
                        name="cpr"
                        type="text"
                        error={errors.cpr}
                        required
                    />
                    <FormSelect
                        label="Experience Level"
                        name="experience"
                        defaultValue="junior"
                        options={[
                            { value: 'junior', label: 'Junior (7-17 years)' },
                            { value: 'adult', label: 'Adult (18+)' },
                        ]}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                        )}
                        {loading ? 'Sending...' : 'Submit Registration'}

                    </button>
                </form>
            </div>
        </section>
    );
}

function FormInput({ label, error, ...props }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}</label>
            <input
                className={`w-full px-4 py-2 border rounded ${error ? 'border-red-500' : ''}`}
                {...props}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

function FormSelect({ label, options, ...props }) {
    return (
        <div>
            <label className="block text-gray-700 mb-1">{label}</label>
            <select className="w-full px-4 py-2 border rounded" {...props}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
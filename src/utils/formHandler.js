export const submitPreOrder = async(formData) => {
    try {
        const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: "POST",
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                city: formData.city,
                model: formData.model,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Submission failed');
        }

        return {
            success: true,
            message: "Thanks! We'll reach out within 24 hours.",
        };
    } catch (error) {
        return {
            success: false,
            message: "Submission failed. Please email us instead.",
        };
    }
};

export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name ? .trim()) {
        errors.name = 'Name is required';
    }

    if (!formData.email ? .trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.city ? .trim()) {
        errors.city = 'City is required';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
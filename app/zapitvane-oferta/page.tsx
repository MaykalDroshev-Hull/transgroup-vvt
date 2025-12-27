"use client";

import { useState } from "react";

export default function ZapitvaneOferta() {
  const [formData, setFormData] = useState({
    ime: "",
    firma: "",
    email: "",
    telefon: "",
    tovarOpisanie: "",
    marshrut: "",
    sObshchenie: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission - in real app this would send to backend
    alert("Благодарим за запитването! Ще се свържем с вас в най-кратък срок.");
    setFormData({
      ime: "",
      firma: "",
      email: "",
      telefon: "",
      tovarOpisanie: "",
      marshrut: "",
      sObshchenie: ""
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Запитване за оферта</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Попълнете формата по-долу и ще получите персонализирана оферта в рамките на 24 часа
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ime" className="block text-sm font-medium text-primary mb-2">
                    Име *
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    required
                    value={formData.ime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Вашето име"
                  />
                </div>
                <div>
                  <label htmlFor="firma" className="block text-sm font-medium text-primary mb-2">
                    Фирма
                  </label>
                  <input
                    type="text"
                    id="firma"
                    name="firma"
                    value={formData.firma}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="Името на фирмата"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Имейл *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-primary mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    placeholder="+359 88 123 4567"
                  />
                </div>
              </div>

              {/* Cargo Information */}
              <div>
                <label htmlFor="tovarOpisanie" className="block text-sm font-medium text-primary mb-2">
                  Описание на товара *
                </label>
                <textarea
                  id="tovarOpisanie"
                  name="tovarOpisanie"
                  required
                  rows={4}
                  value={formData.tovarOpisanie}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-vertical"
                  placeholder="Опишете подробно вашия товар - тегло, обем, вид, специални изисквания..."
                />
              </div>

              <div>
                <label htmlFor="marshrut" className="block text-sm font-medium text-primary mb-2">
                  Маршрут *
                </label>
                <input
                  type="text"
                  id="marshrut"
                  name="marshrut"
                  required
                  value={formData.marshrut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                  placeholder="От къде до къде (напр. София - Варна)"
                />
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="sObshchenie" className="block text-sm font-medium text-primary mb-2">
                  Допълнителна информация
                </label>
                <textarea
                  id="sObshchenie"
                  name="sObshchenie"
                  rows={3}
                  value={formData.sObshchenie}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-vertical"
                  placeholder="Допълнителни изисквания, срокове, специални условия..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-colors shadow-lg"
                >
                  Изпрати запитване
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Или се свържете директно с нас
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-text-secondary">
                  <div>
                    <strong className="text-primary">Телефон:</strong><br />
                    +359 2 123 4567
                  </div>
                  <div>
                    <strong className="text-primary">Имейл:</strong><br />
                    info@transgroup-vvt.bg
                  </div>
                  <div>
                    <strong className="text-primary">Работно време:</strong><br />
                    Пн-Пт: 8:00-18:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

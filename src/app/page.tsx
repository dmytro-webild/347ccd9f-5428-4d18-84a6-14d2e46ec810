"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Flame, Heart, Phone, TrendingUp, UtensilsCrossed, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mony's Café"
          bottomLeftText="San Antonio, TX"
          bottomRightText="(210) 555-0147"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="San Antonio's Favorite Local Café"
          description="Authentic flavors. Fast service. 1,300+ happy customers."
          background={{ variant: "plain" }}
          kpis={[
            { value: "4.9★", label: "Customer Rating" },
            { value: "1,300+", label: "Reviews" },
            { value: "20+yrs", label: "Local Tradition" }
          ]}
          enableKpiAnimation={true}
          tag="Authentic Mexican Café"
          tagIcon={Flame}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now", href: "tel:(210)555-0147" },
            { text: "View Menu", href: "#menu" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-mexican-food-with-avocado_23-2148283052.jpg"
          imageAlt="Authentic Mexican breakfast with chilaquiles and fresh eggs"
          mediaAnimation="slide-up"
          imagePosition="right"
          avatarText="Join 1,300+ satisfied customers"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/cheerful-middle-aged-businesswoman_1262-21005.jpg", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-photo/young-smiley-man-looking-camera_23-2148306634.jpg", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-using-mobile-phone-holding-cookie-hand_23-2148137425.jpg", alt: "Customer testimonial" },
            { src: "http://img.b2bpic.net/free-photo/caucasian-brunette-male-portrait_158595-7921.jpg", alt: "Customer testimonial" }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={["Google Reviews", "Yelp Featured", "Local Favorite", "Community Choice", "Top Rated"]}
          title="Trusted by the Community"
          description="Consistently rated as one of San Antonio's best local cafés for authentic Mexican breakfast and traditional flavors."
          tag="Award-Winning Local Business"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="menu-highlights" data-section="menu-highlights">
        <ProductCardTwo
          title="Menu Highlights"
          description="Try our most-loved authentic dishes prepared fresh daily with traditional recipes."
          tag="Customer Favorites"
          tagIcon={UtensilsCrossed}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          products={[
            {
              id: "chilaquiles",              brand: "Signature Dish",              name: "Chilaquiles",              price: "$12.99",              rating: 5,
              reviewCount: "450+",              imageSrc: "http://img.b2bpic.net/free-photo/tasty-appetizing-crispbread-with-mashed-avocado-served-plate-closeup_1220-6281.jpg",              imageAlt: "Crispy chilaquiles with eggs and fresh salsa"
            },
            {
              id: "menudo",              brand: "Traditional Recipe",              name: "Menudo",              price: "$10.99",              rating: 5,
              reviewCount: "380+",              imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-tomato-soup-beans-garlic-wooden-cutting-board-mix-color-background_140725-92021.jpg",              imageAlt: "Authentic Mexican menudo in traditional broth"
            },
            {
              id: "coffee",              brand: "Premium Beverage",              name: "Turkish Coffee",              price: "$4.99",              rating: 5,
              reviewCount: "520+",              imageSrc: "http://img.b2bpic.net/free-photo/aromatic-frappuccino-table_23-2148900665.jpg",              imageAlt: "Traditional Turkish coffee with foam"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose Mony's Café?"
          description={[
            "For over 20 years, Mony's Café has been the heart of San Antonio's breakfast culture. We're committed to serving authentic Mexican cuisine using time-tested family recipes and the freshest ingredients.",            "Our mission is simple: deliver fast, friendly service without compromising on quality. From our signature chilaquiles to traditional menudo, every dish reflects our passion for authentic flavors and community connection.",            "Whether you're starting your day with us or grabbing a quick lunch, you're part of the Mony's family. That's why 1,300+ reviews and a 4.9-star rating matter to us—they represent your trust."
          ]}
          buttons={[
            { text: "Call Now", href: "tel:(210)555-0147" },
            { text: "Visit Us Today", href: "#contact" }
          ]}
          showBorder={false}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="Convenient Ways to Enjoy Mony's"
          description="We've made it easy to get authentic Mexican café experience—whether you prefer dine-in comfort or fast drive-through service."
          tag="Multiple Service Options"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "dine-in",              label: "Dine-In",              title: "Cozy Café Atmosphere",              items: [
                "Comfortable seating for families and friends",                "Traditional Mexican décor and ambiance",                "Full beverage menu and fresh pastries"
              ]
            },
            {
              id: "drive-through",              label: "Drive-Through",              title: "Fast Pickup Service",              items: [
                "Order ahead by phone for quick pickup",                "Hot, fresh food ready when you arrive",                "Perfect for busy mornings"
              ]
            },
            {
              id: "catering",              label: "Catering",              title: "Events & Groups",              items: [
                "Family gatherings and office parties",                "Custom menu options available",                "Call ahead for special orders"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Customers Say"
          description="Real reviews from real customers who've made Mony's Café part of their daily routine."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Customer Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Best Breakfast in San Antonio",              quote: "I've been coming here for 5 years. The chilaquiles are absolutely incredible—crispy, flavorful, and made with love. Mony's is a true San Antonio treasure.",              name: "Maria Garcia",              role: "Regular Customer",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-middle-aged-businesswoman_1262-21005.jpg",              imageAlt: "Maria Garcia testimonial"
            },
            {
              id: "2",              title: "Fast Service, Authentic Taste",              quote: "I grab coffee and breakfast here before work three times a week. It's the perfect combo of speed and quality. The staff knows me by name!",              name: "James Rodriguez",              role: "Business Professional",              imageSrc: "http://img.b2bpic.net/free-photo/young-smiley-man-looking-camera_23-2148306634.jpg",              imageAlt: "James Rodriguez testimonial"
            },
            {
              id: "3",              title: "Family Favorite Since Day One",              quote: "My kids grew up eating at Mony's. Now I bring my grandkids. The value, the portions, the authentic flavors—nothing's changed. Still perfect.",              name: "Elena Morales",              role: "Multi-Generation Customer",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-using-mobile-phone-holding-cookie-hand_23-2148137425.jpg",              imageAlt: "Elena Morales testimonial"
            },
            {
              id: "4",              title: "Perfect for Quick Lunch",              quote: "Drive-through is amazingly efficient. I ordered ahead, pulled up, and had my menudo in 2 minutes. Hot, fresh, and exactly what I needed.",              name: "David Lopez",              role: "Local Office Worker",              imageSrc: "http://img.b2bpic.net/free-photo/caucasian-brunette-male-portrait_158595-7921.jpg",              imageAlt: "David Lopez testimonial"
            },
            {
              id: "5",              title: "Authentic and Affordable",              quote: "You can taste the authenticity in every bite. Prices are fair for the quality. This is real Mexican food made right. Highly recommend!",              name: "Sofia Mendez",              role: "Food Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-african-woman-student-resting-relaxing-sitting-cafe-smiling-drinking-coffee_176420-12331.jpg",              imageAlt: "Sofia Mendez testimonial"
            },
            {
              id: "6",              title: "Community Gathering Spot",              quote: "Mony's isn't just a café—it's a community hub. The atmosphere, the service, the food quality... everything makes you feel like family.",              name: "Carlos Fernandez",              role: "Neighborhood Regular",              imageSrc: "http://img.b2bpic.net/free-photo/serious-young-business-man-looking-camera_1262-18625.jpg",              imageAlt: "Carlos Fernandez testimonial"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="By the Numbers"
          description="These metrics represent our commitment to quality, service, and community."
          tag="Trust Through Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "rating", value: "4.9★", description: "Average Rating from 1,300+ Reviews" },
            { id: "years", value: "20+", description: "Years of Serving San Antonio" },
            { id: "customers", value: "1,000s", description: "Happy Customers Monthly" },
            { id: "orders", value: "98%", description: "Order Accuracy Rate" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Ready to Experience Mony's?"
          description="Call us now or fill out the form below. We're open early for breakfast and serve until late lunch. Don't miss out on authentic Mexican café excellence."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email for updates"
          buttonText="Sign Up"
          termsText="By contacting us, you agree to our Terms and Conditions."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Mony's Café"
          columns={[
            {
              items: [
                { label: "Home", href: "#home" },
                { label: "Menu", href: "#menu" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              items: [
                { label: "Phone", href: "tel:(210)555-0147" },
                { label: "Email", href: "mailto:hello@monyscafe.com" },
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" }
              ]
            },
            {
              items: [
                { label: "Google Reviews", href: "#" },
                { label: "Yelp Page", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Accessibility", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
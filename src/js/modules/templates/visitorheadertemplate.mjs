import { iconTemplate } from "./icontemplate.mjs";
import { vcDetailsTemplate } from "./vcDetailsTemplate.mjs";


export function populateVisitorCenterInfo(data) {
    if (!data) {
        console.error("No visitor center data available.");
        return;
    }

    // Populate Visitor Center Name
    const nameElement = document.querySelector(".vc-name");
    if (nameElement) {
        nameElement.innerHTML = `
            ${iconTemplate("ranger-station")}
            ${data.name || "Visitor Center"}
        `;
    }

    // Populate Visitor Center Info Section
    const infoSection = document.querySelector(".vc-info");
    if (infoSection) {
        infoSection.innerHTML = `
            <figure>
                <img src="${data.images?.[0]?.url || "https://via.placeholder.com/150"}" 
                     alt="${data.images?.[0]?.altText || "Visitor center image"}" />
                <figcaption>${data.images?.[0]?.title || "Image caption"} 
                    <span>${data.images?.[0]?.credit || ""}</span>
                </figcaption>
            </figure>
            <p>${data.description || "No description available for this visitor center."}</p>
        `;
    }

    // Populate Addresses using vcDetailsTemplate
    const addressesContent = data.addresses?.map(addr => `
        <section class="vc-addresses__${addr.type.toLowerCase()}">
            <h3>${addr.type || "Address"}</h3>
            <address>
                ${addr.line1 || ""}<br />
                ${addr.city || ""}, ${addr.stateCode || ""} ${addr.postalCode || ""}
            </address>
        </section>
    `).join("") || "No addresses available.";

    const addressesSection = document.querySelector("#vcAddresses");
    if (addressesSection) {
        addressesSection.outerHTML = vcDetailsTemplate(
            "vcAddresses",
            "Addresses",
            "heading-icon_map-pin",
            addressesContent
        );
    }

    // Populate Directions using vcDetailsTemplate
    const directionsSection = document.querySelector("#vcDirections");
    if (directionsSection) {
        directionsSection.outerHTML = vcDetailsTemplate(
            "vcDirections",
            "Directions",
            "directions",
            `<p>${data.directionsInfo || "No directions available."}</p>`
        );
    }

    // Populate Amenities using vcDetailsTemplate
    const amenitiesContent = data.amenities?.map(amenity => `<li>${amenity}</li>`).join("") || "<li>No amenities available.</li>";
    const amenitiesSection = document.querySelector("#vcAmenities");
    if (amenitiesSection) {
        amenitiesSection.outerHTML = vcDetailsTemplate(
            "vcAmenities",
            "Amenities",
            "heading-icon_info",
            `<ul>${amenitiesContent}</ul>`
        );
    }

    // Populate Contact Information using vcDetailsTemplate
    const email = data.contacts?.emailAddresses?.[0]?.emailAddress || "No email available";
    const phone = data.contacts?.phoneNumbers?.[0]?.phoneNumber || "No phone number available";
    const contactContent = `
        <section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="mailto:${email}">${email}</a>
        </section>
        <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:${phone}">${phone}</a>
        </section>
    `;
    const contactSection = document.querySelector("#vcContact");
    if (contactSection) {
        contactSection.outerHTML = vcDetailsTemplate(
            "vcContact",
            "Contact Information",
            "phone",
            contactContent
        );
    }

    // Populate Image Gallery
    const gallerySection = document.querySelector(".vc-gallery ul");
    if (gallerySection) {
        const galleryItems = data.images?.map(image => `
            <li>
                <img src="${image.url}" alt="${image.altText || "Gallery image"}" />
            </li>
        `).join("") || "<li>No images available.</li>";
        gallerySection.innerHTML = galleryItems;
    }
}

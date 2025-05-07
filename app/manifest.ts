import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        "name": "Pookie Iras",
        "short_name": "PIRAS",
        "start_url": "/?homescreen=1", // Ensures correct startup for mobile PWAs
        "display": "standalone", // Make it look like a native app
        "background_color": "#ffffff", // Background color of splash screen
        "theme_color": "#000000", // Theme color for status bar
        "orientation": "portrait", // Lock the orientation to portrait
        "display_override": ["standalone"], // Override default display mode
        "icons": [
            {
                "src": "/assets/logo.png", // Path for icon
                "sizes": "192x192", // Small icon for Android home screen
                "type": "image/png"
            },
            {
                "src": "/assets/logo.png", // Large icon for Android and iOS
                "sizes": "512x512", // Large icon for PWA installation
                "type": "image/png"
            },
            {
                "src": "/assets/logo.png", // Additional icon for iOS
                "sizes": "180x180", // iOS specific icon size
                "type": "image/png"
            }
        ],
        "screenshots": [
            {
                "src": "/screenshots/SplashScreen.png", // Android splash screen
                "sizes": "1280x720", // Standard splash screen size for Android
                "type": "image/png",
                "platform": "android",
                "label": "Splash Screen"
            },
            {
                "src": "/screenshots/SplashScreen.png", // iOS splash screen
                "sizes": "1280x720", // Splash screen for iOS
                "type": "image/png",
                "platform": "ios",
                "label": "Splash Screen"
            }
        ]
    }
}

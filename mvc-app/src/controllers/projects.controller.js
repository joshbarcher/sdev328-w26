
const projects = [
    {
        "id": 1,
        "title": "Media Streaming Platform",
        "description": "Self-hosted HLS streaming system with job-based transcoding and metadata services.",
        "tech": ["Node.js", "FFmpeg", "HLS", "Linux"]
    },
    {
        "id": 2,
        "title": "MVC API Scaffold Tool",
        "description": "CLI tool that scaffolds opinionated MVC web API projects for students.",
        "tech": ["Node.js", "ESM", "NPM", "Express"]
    },
    {
        "id": 3,
        "title": "OBS Teaching Overlay System",
        "description": "Custom OBS scene and overlay setup for live coding lectures and demos.",
        "tech": ["OBS Studio", "HTML", "CSS", "JavaScript"]
    },
    {
        "id": 4,
        "title": "Fantasy Card Game Engine",
        "description": "Grid-based strategy card game with branching hero evolutions.",
        "tech": ["Godot", "C#", "Shader Graph", "Blender"]
    },
    {
        "id": 5,
        "title": "Course Lab Hosting Platform",
        "description": "Static site system for hosting interactive programming labs and cheat sheets.",
        "tech": ["HTML", "CSS", "JavaScript", "Nginx"]
    },
    {
        "id": 6,
        "title": "Metadata Management Service",
        "description": "Service for organizing and validating movie and TV metadata using canonical titles.",
        "tech": ["Node.js", "JSON", "REST", "TMDB"]
    },
    {
        "id": 7,
        "title": "Network File Sync Tool",
        "description": "Server-pull based file synchronization system optimized for gigabit networks.",
        "tech": ["Linux", "SMB", "Robocopy", "Shell"]
    },
    {
        "id": 8,
        "title": "Student Assignment API",
        "description": "RESTful API for managing coursework submissions and grading data.",
        "tech": ["Express", "PostgreSQL", "JWT", "REST"]
    },
    {
        "id": 9,
        "title": "TCG Asset Pipeline",
        "description": "Automated pipeline for generating, organizing, and exporting card game assets.",
        "tech": ["Blender", "Python", "PBR", "ImageMagick"]
    },
    {
        "id": 10,
        "title": "Home Network Remote Access",
        "description": "Secure remote access solution for home lab services and NAS resources.",
        "tech": ["Tailscale", "Proxmox", "Ubuntu", "Windows"]
    }
]

export const getAllProjects = (req, res) => {
    const projected = projects.map(el => {
        return {
            title: el.title,
            description: el.description
        }
    })
    return res.status(200).json(projected);
}

export const getSingleProject = (req, res) => {
    // const title = req.query.title;
    // const id = req.query.id;

    const { title, id } = req.query;

    console.log(req.query);
    console.log(title, id);

    return res.status(200).send("Hello");
}
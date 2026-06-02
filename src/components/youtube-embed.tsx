interface YouTubeEmbedProps {
   id: string;
   title?: string;
}

export default function YouTubeEmbed({ id, title = "YouTube video" }: YouTubeEmbedProps) {
   return (
      <div className="my-6 rounded-lg overflow-hidden border border-border/40 bg-secondary">
         <div className="relative aspect-video">
            <iframe
               src={`https://www.youtube-nocookie.com/embed/${id}`}
               title={title}
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="absolute inset-0 w-full h-full"
            />
         </div>
      </div>
   );
}

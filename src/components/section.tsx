interface SectionProps {
    title: string;
    subtitle: string;
    backgroundClass?: string;  // Optional prop for background color class
    colorClass?: string;  
    paragraphs?: string[];
    hasSubtitle?: boolean; 
    hasEvenColumns?: boolean; 
    textCenter?: string;
    dataDecoration?: boolean; 
  }

function Section({ title, 
    subtitle, 
    backgroundClass = "",
    colorClass = "",  
    paragraphs = [],
    hasSubtitle = false, 
    textCenter = "",
    hasEvenColumns = false,
    dataDecoration = false,
}: SectionProps) {
      // Apply the 'hidden' class based on `hasSubtitle`
  const subtitleClass = hasSubtitle ? '' : 'hidden';
  const dataDecorationValue = dataDecoration ? 'true' : undefined;
  const headerClass = hasSubtitle ? 'with-subtitle' : 'without-subtitle';

    return(
        <section className={`section ${backgroundClass} ${colorClass} ${textCenter}`}>
            <header className={`section-heading ${headerClass}`} data-decoration={dataDecorationValue}>
                <h2 className="fs-800 | ff-accent">{title}</h2>
                <p className={`fs-600 | uppercase ${subtitleClass} ? 'no-subtitle' : '`}>{subtitle}</p>
            </header>
        <div className={`${hasEvenColumns ? 'even-columns' : ''}`}>
            {paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>


        </section>
    )
    
}

export default Section;
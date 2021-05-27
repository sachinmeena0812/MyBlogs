let btn = document.getElementById('btn-more')
btn.addEventListener('click', readmore)

let html = "";

function readmore(e) {
    console.log("clicked");
    html += `<h1 style="text-decoration: underline; margin: 6px; font-family: 'Baloo Bhai 2'; ">IPL 2021 Postponed</h1>
    <p style="font-size: 18px; ">Author: Sachin Meena</p>
    <p style="font-size: 12px;font-style: italic; ">21:26 | 16th May 2021</p>
    <br>
    <p> The IPL 2021 stands postponed after it was discovered that a third team - and possibly a fourth - had at least one positive case. The BCCI decided it was in the best interest of all stakeholders to get everyone home and safe. Follow our Live
        BWhat becomes of the T20 World Cup, scheduled to be played in India later this year, now? One of the lessons from this IPL even after making an allowance for the dramatic surgelog for all the updates, reactions and analysis. Please keep
        refreshing for latest updates.
</p>
    <p>
    What becomes of the T20 World Cup, scheduled to be played in India later this year, now? One of the lessons from this IPL even after making an allowance for the dramatic surge in cases as compared to during the Test series is that it is a different ball
    game to organise a multi-team event with multiple venues and air travel involved. It is no surprises cases emerged inside the strict IPL bubbles within days of their travel from Chennai and Mumbai to Delhi and Ahmedabad. This will raise
    questions on whether it is safe to host the T20 World Cup in India. The ICC will surely look into it and take the BCCI's inputs on it. We already know that the UAE is a back-up option in a worst-case scenario.
</p>
<p>
    The BCCI's biggest immediate challenge Given the stated aim - and rightly so - is to get every participant to their families and loved ones, the biggest immediate challenge for the BCCI is to get overseas players into their respective countries. As it
    stands, most countries in the world have already banned entry for those coming in India or contemplating that. Australia is one of the countries that have done the former. New Zealand is still allowing citizens back in. The UK will require
    those coming in to quarantine for 10 days at a government-approved hotel and test on days 2 and 8. However, the UAE, a major transit point for most flights, has stopped entertaining flights from India. Air travel from India to Bangladesh
    stands suspended but the land border is open with the caveat of a 14-day quarantine. NZC has responded to the situation: "NZC remains in contact with the New Zealand contingent in the Indian Premier League. The players are in a relatively
    safe environment and those within affected teams are in isolation. We'll continue to liaise with the BCCI, the ECB and New Zealand government authorities in terms of managing their situation - but at this juncture it's too early to discuss
    potential options." Mohammad Isam from Bangladesh tells me: "BCB is in touch with the BCCI about the Bangladesh duo's travel plans. It is not clear whether Shakib and Mustafizur will be doing a 3-day or a 14-day quarantine. It is being
    considered still because they are coming from India."
</p>

    `
    let read = document.getElementById('read');
    read.innerHTML = html;

    image();
    content();

}

function image() {
    document.getElementById('foo').style.cssText = 'height: 20%; width: 100%';
    document.getElementById('article-right').style.margin = 'auto';
}



function content() {
    document.getElementById("content").style.flexDirection = "column";
    document.getElementById("read").style.width = "100%";
}
import { Column, Heading, Flex, Button } from "@/once-ui/components";
import { contact } from "@/app/resources/content";

export default function Contact() {
  return (
    // <Column maxWidth="m" alignItems="center" gap="l" paddingY="xl">
    <Column maxWidth="m" gap="l" paddingY="xl" className="flex items-center">

      <Heading as="h2" variant="display-strong-l">
        {contact.title}
      </Heading>
      <p>{contact.description}</p>

      <Flex wrap gap="m">
        {contact.links.map((link, index) => (
          // <Button key={index} as="a" href={link.link} target="_blank" variant="secondary" size="m">
          //   <Icon name={link.icon} />
          //   {link.name}
          // </Button>
          <a key={index} href={link.link} target="_blank">
            <Button variant="secondary" size="m">
              {/* <Icon name={link.icon} /> */}
              {link.name}
            </Button>
          </a>

        ))}
      </Flex>
    </Column>
  );
}

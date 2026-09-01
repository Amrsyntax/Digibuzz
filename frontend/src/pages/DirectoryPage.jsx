import { Card } from '../components/ui';
import { directoryProfiles } from '../data';

export function DirectoryPage() {
  return (
    <section className="band">
      <h1>Directory</h1>
      <p className="muted">Public bio pages created with Digibuzz.</p>
      <div className="directory">
        {directoryProfiles.map((profile) => (
          <Card key={profile.handle}>
            <span className="avatar" style={{ background: profile.color }}>
              {profile.name.slice(0, 1)}
            </span>
            <strong>{profile.name}</strong>
            <small>digibuzz.app/{profile.handle}</small>
          </Card>
        ))}
      </div>
    </section>
  );
}
